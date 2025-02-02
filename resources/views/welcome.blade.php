<!DOCTYPE html>
<html>

<head>
    <title>Welcome to Our Platform</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .email-container {
            background-color: #ffffff;
            padding: 20px;
            max-width: 600px;
            margin: auto;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
        }

        p {
            color: #555555;
            font-size: 16px;
            line-height: 1.5;
        }

        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777777;
            text-align: center;
        }
    </style>

</head>

<body>
    <div class="email-container">
        <h1>DATA TUGAS AKHIR - {{ env('DATA_TUGAS_AKHIR') }}</h1>
        <p>
            Semoga Cepet Selesai
        </p>
        <p>
            AAMIIN YA ALLAH
        </p>
        <p>Semangat,<br />{{ config('app.name') }} Team</p>

        <div class="footer">
            <p>
                &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
            </p>
        </div>
    </div>
</body>

</html>
