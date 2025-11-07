import socketio
import eventlet
import time

# Create a Socket.IO server
sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio)

# State to track the indicator boolean
indicator_state = False

@sio.event
def connect(sid, environ):
    print(f'Client connected: {sid}')

@sio.event
def disconnect(sid):
    print(f'Client disconnected: {sid}')

@sio.event
def button(sid, data=None):
    print(f'Button pressed by client {sid}! with {data=}')

def emit_indicator():
    """Background task that emits alternating boolean values"""
    global indicator_state
    while True:
        eventlet.sleep(2)  # Wait 2 seconds between emissions
        sio.emit('indicator', indicator_state)
        print(f'Emitted indicator: {indicator_state}')
        indicator_state = not indicator_state  # Toggle the boolean

if __name__ == '__main__':
    # Start the background task
    eventlet.spawn(emit_indicator)
    
    print('Socket.IO server starting on http://0.0.0.0:5000')
    eventlet.wsgi.server(eventlet.listen(('0.0.0.0', 5000)), app)

