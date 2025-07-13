# Running a Local Server
## Tutorial
---

When working with HTML files that include JavaScript that loads external files (like CSV, JSON, or other data files), you need to run a local server instead of opening the HTML file directly in your browser. This is because modern browsers block certain operations (like loading local files) for security reasons when using the `file://` protocol.

### Why You Need a Local Server

- **CORS (Cross-Origin Resource Sharing)**: Browsers block requests to local files when using `file://` protocol
- **AJAX/Fetch requests**: Loading CSV, JSON, or other data files requires HTTP protocol
- **Module imports**: ES6 modules require a server environment
- **API calls**: External API requests often require proper HTTP headers

### VS Code

In this class, we will be working with VS Code, which contains a free extension to run a local server.

![chrome_CmPq21Uhlj](https://github.com/user-attachments/assets/bcdcfd61-9d26-4b7b-aa30-aa9b50e6ad83)

### Proposed Method: Live Server in VS Code

The Live Server extension is a popular and easy-to-use solution for running a local development server directly from VS Code.

![Code_s4vO2i537W](https://github.com/user-attachments/assets/e4f73b84-7685-4b9e-ae9f-ec3455ada794)

#### Step 1: Install the Live Server Extension

1. **Open VS Code**
2. **Open the Extensions panel**:
   - Click the Extensions icon in the left sidebar (looks like four squares)
3. **Search for "Live Server"**:
   - In the search box, type "Live Server"
   - Look for the extension by **Ritwick Dey** (it should be one of the most popular results)
4. **Install the extension**:
   - Click the "Install" button
   - Wait for the installation to complete

![Code_YNl5H3Z6CD](https://github.com/user-attachments/assets/8f79253c-d9cf-4427-ba63-1daa23a35ac5)

#### Step 2: Using Live Server

Once installed, you can start a local server in several ways:

**Method 1: Right-click on an HTML file**
1. Open your project folder in VS Code
2. Right-click on any HTML file in the file explorer
3. Select "Open with Live Server" from the context menu

**Method 2: Using the status bar**
1. Open your project folder in VS Code
2. Click "Go Live" in the bottom status bar of VS Code

![Code_PMtmEKP3w4](https://github.com/user-attachments/assets/83d5c2d5-9b60-485e-a30d-93e94a1f4e0b)

#### Step 3: What Happens Next

- Your default web browser will automatically open
- The server typically runs on `http://localhost:5500` (or another available port)
- Any changes you make to your files will automatically reload in the browser
- The server will continue running until you stop it

![Code_UxHujb9ksw](https://github.com/user-attachments/assets/2586fe1d-35be-4c9a-92f5-db3d38db7b40)

#### Step 4: Stopping the Server

To stop the Live Server:
- Click "Port: 5500" in the VS Code status bar
- Or right-click in the editor and select "Stop Live Server"
- Or use the command palette: "Live Server: Stop Live Server"



