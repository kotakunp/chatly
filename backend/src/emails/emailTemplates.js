export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Chatly</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f7f9fc;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      }
      .header {
        text-align: center;
        padding: 40px 20px;
        background-color: #3662e3;
        color: #ffffff;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
      }
      .content {
        padding: 30px 40px;
      }
      .content h2 {
        font-size: 22px;
        font-weight: 500;
        color: #1a1a1a;
        margin-top: 0;
      }
      .content p {
        color: #555;
        font-size: 16px;
      }
      .cta-button {
        display: inline-block;
        background-color: #3662e3;
        color: #ffffff;
        text-decoration: none;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 500;
        margin-top: 20px;
        transition: background-color 0.3s ease;
      }
      .cta-button:hover {
        background-color: #2b51c6;
      }
      .list {
        list-style-type: none;
        padding: 0;
        margin: 25px 0;
      }
      .list-item {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        color: #444;
      }
      .list-item:last-child {
        border-bottom: none;
      }
      .footer {
        text-align: center;
        padding: 20px 40px;
        font-size: 12px;
        color: #999;
        border-top: 1px solid #eee;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to Chatly!</h1>
      </div>
      <div class="content">
        <h2>Hello ${name},</h2>
        <p>We're thrilled to have you join the Chatly community. Our platform is designed to make real-time communication simple, fast, and reliable. Connect with friends and family instantly, share moments, and create new conversations.</p>
        
        <p>You can get started right away by exploring these features:</p>
        
        <ul class="list">
          <li class="list-item">🚀 Start a new conversation</li>
          <li class="list-item">📸 Share photos and videos</li>
          <li class="list-item">💬 Connect with your contacts</li>
        </ul>
        
        <div style="text-align: center;">
          <a href="${clientURL}" class="cta-button">Open Chatly</a>
        </div>
        
        <p>If you have any questions or need support, our team is always here to help.</p>
        <p>Happy chatting!<br>The Chatly Team</p>
      </div>
      <div class="footer">
        <p>© 2025 Chatly. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}