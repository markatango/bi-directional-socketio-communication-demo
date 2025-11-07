# Socket.IO Demo

A simple demonstration of real-time communication between a Python Socket.IO server and a Vite/JavaScript client.

## Features

- **Server**: Python server that emits alternating true/false boolean values every 2 seconds on the 'indicator' event
- **Client**: Vite-powered web interface that displays the indicator state visually
- **Button**: Client button that sends an event to the server, which logs a message

## Setup Instructions

### Server Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Start the server:
```bash
python server.py
```

The server will start on `http://localhost:5000`

### Client Setup

1. Install Node.js dependencies:
```bash
npm install
```

2. Start the Vite development server:
```bash
npm run dev
```

The client will typically start on `http://localhost:5173`

## Usage

1. Start the Python server first
2. Start the Vite client
3. Open your browser to the Vite dev server URL (usually `http://localhost:5173`)
4. Watch the indicator toggle between ON (colored) and OFF (gray) every 2 seconds
5. Click the "Send Event to Server" button to send an event to the server
6. Check the server console to see the message logged when you click the button

## How It Works

- The server periodically emits `indicator` events with alternating boolean values
- The client listens for these events and updates the visual indicator accordingly
- When the button is clicked, the client emits a `button` event
- The server receives the `button` event and logs a message to the console

## To serve remotely and access on your local machine, change the IP addresses in the last lines in server.py to:
print('Socket.IO server starting on http://0.0.0.0:5000')
eventlet.wsgi.server(eventlet.listen(('0.0.0.0', 5000)), app)



