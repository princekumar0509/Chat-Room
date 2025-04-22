# Pixy Chat

## Description
Pixy Chat is a real-time chat application that allows users to connect and communicate in a colorful pixel-themed environment. Firebase has been authentication systems, and real-time data handling.

## Live Demo
# WEBSITE LINK: [Pixy Chat](https://chat-room-sable-delta.vercel.app/)

## Features
- **User Authentication**: 
  - Email/password registration and login
  - Google Sign-In integration
  - Persistent user sessions
  - Welcome back functionality for returning users
  
- **Real-time Messaging**:
  - Instant message delivery
  - Chat history preservation
  - User avatars display alongside messages
  - Visual distinction between sent and received messages
  
- **Responsive Design**:
  - Pixel-themed UI elements
  - User-friendly interface
  - Smooth scrolling to new messages
  
- **Security**:
  - Secure authentication through Firebase
  - Protected routes for authenticated users only

## Tech Stack
- **Frontend**:
  - React.js (Functional components with Hooks)
  - CSS for styling
  
- **Backend & Services**:
  - Firebase Authentication
  - Firebase Firestore (NoSQL database)
  
- **Deployment**:
  - Vercel (https://chat-room-sable-delta.vercel.app/)

## Installation & Setup

### Prerequisites
- Node.js and npm installed
- A Firebase account

### Steps
1. Clone the repository
   ```
   git clone https://github.com/yourusername/pixy-chat.git
   cd pixy-chat
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google provider)
   - Create a Firestore database


5. Start the development server
   ```
   npm start
   ```

6. Open your browser at `http://localhost:3000`

## Usage
1. Register a new account or sign in with Google
2. Start sending messages in the chat room
3. Messages appear in real-time for all connected users
4. Sign out when done

## Project Structure
- `App.js` - Main application component
- `components/`
  - `Welcome.js` - Authentication page
  - `NavBar.js` - Navigation header
  - `ChatBox.js` - Main chat interface
  - `Message.js` - Individual message component
  - `SendMessage.js` - Message input form
- `firebase.js` - Firebase configuration

## Future Enhancements
- Multiple chat rooms
- User profiles with customizable avatars
- Message reactions
- File sharing capabilities
- Direct messaging between users

## Screenshots
![Screenshot from 2025-04-22 00-21-23](https://github.com/user-attachments/assets/bac75b25-9a6a-41ad-8d0a-0f88e0a064a3)

![Screenshot from 2025-04-22 00-22-56](https://github.com/user-attachments/assets/29d6aefc-fbd9-433c-913a-c4e403eded92)

![Screenshot from 2025-04-22 00-20-33](https://github.com/user-attachments/assets/03f40c56-c89f-4ee7-b57d-f267c6660e6e)


---

Deployed at: [https://chat-room-sable-delta.vercel.app/](https://chat-room-sable-delta.vercel.app/)
