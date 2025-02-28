# CloseAI Assistant

## [Live Demo](https://closeai-assistant.netlify.app/)

## Overview

CloseAI Assistant is an AI-powered sales outreach agent designed to automate prospect research, personalize email campaigns, and streamline the deal-closing process. This project leverages AI-driven automation to enhance efficiency for founders, marketers, and sales professionals.

## Features

- 🚀 AI-generated personalized email outreach
- 🔍 Automated prospect research and domain analysis
- ✉️ Dynamic email generation using AI models
- 🤖 Integration with CrewAI, LangChain, and NodeMailer
- 🔧 Blueprint for automation via [Make.com](https://eu2.make.com/)

## Technologies Used

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI Integration:** CrewAI, LangChain, Vapi
- **Email Automation:** NodeMailer
- **Database:** Supabase
- **Deployment:** Netlify

## Prerequisites

- Node.js and npm installed
- Git installed

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/vikas-kashyap97/Closeai-assistant.git
cd Closeai-assistant
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```ini
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key
```

### 4. Start the Development Server
```bash
npm start
```

### 5. Open the Project in Your Browser
```
http://localhost:3000
```

## Deployment

This project includes a `netlify.toml` file for easy deployment on Netlify. To deploy:

1. Push the project to GitHub.
2. Connect the repository to Netlify.
3. Deploy the site with a single click.

## Usage

- Open the application in your browser.
- Enter the required details for outreach.
- AI will generate personalized emails and suggestions.

## API Endpoints

### **POST** `/generate-email`
**Request Body:**
```json
{
  "email": "example@domain.com",
  "company": "Example Corp"
}
```
**Response:**
```json
{
  "subject": "Boost Your Sales with AI Automation",
  "body": "Hello, I noticed your company..."
}
```

## License

This project is licensed under the **MIT License**.

## Contact

For support, reach out to **vikaskashyaprock@gmail.com** or visit **[GitHub](https://github.com/vikas-kashyap97/Closeai-assistant)**.

