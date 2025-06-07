<?php

include 'db_context.php';

$data = json_decode(file_get_contents("php://input"));

$response = [];

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(!empty($data->first_name) && !empty($data->last_name) && !empty($data->email) && !empty($data->password)) {
        
        
        $stmt = $con->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$data->email]);
        
        if($stmt->rowCount() > 0) {
            $response = [
                'status' => 'error',
                'message' => 'Email already exists'
            ];
        } else {
            
            $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);
            
           
            $stmt = $con->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
            $stmt->execute([$data->first_name, $data->last_name, $data->email, $hashed_password]);
            
            if($stmt->rowCount() > 0) {
                $response = [
                    'status' => 'success',
                    'message' => 'User registered successfully',
                    'user_id' => $con->lastInsertId()
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Registration failed'
                ];
            }
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'All fields are required'
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Invalid request method'
    ];
}

echo json_encode($response);
?>