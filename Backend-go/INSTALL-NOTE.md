1. Install WSL on Windows
- Go to: https://learn.microsoft.com/en-us/windows/wsl/install and follow the instructions.
 + Open PowerShell as Administrator and run the following command:
 + Run: `wsl --install`
 + Install Windows Terminal from Microsoft Store.
    + Restart your computer.
 + Run `sudo apt update` and `sudo apt install make`
    + Checking make version: `make -v`

2. Install Go on WSL
- Run: `sudo snap install go --classic`

3. Install sqlc on WSL
- Run: `sudo snap install sqlc`

4. Install VS Code on Windows if you haven't already
- Go to: https://code.visualstudio.com/Download and follow the instructions.

5. Install WSL (by microsoft.com) extension for VS Code.
6. Install Go (by go.dev) extension for VS Code.
7. Install Docker Desktop on Windows: https://docs.docker.com/desktop/wsl/
 - Turn on Docker Desktop WSL 2 
   + Download and install the latest version of Docker Desktop. 

   Note: if you install immediately after downloading, you can get an error: Refer to this link: https://github.com/docker/for-win/issues/13318
   
   To avoid it, lets copy the directory path of the folder where you have been downloaded the Docker Desktop. Ex: `C:\Users\haitr\Downloads\Docker`

   + Open Windows PowerShell as Administrator and run the following command:
      Change directory to the folder where you have been downloaded the Docker Desktop.

      Ex:
     ```bash
       cd C:\Users\haitr\Downloads\Docker
     ```
       Run the following command:
     ```bash
     Start-Process "Docker Desktop Installer.exe" -Verb RunAs -Wait -ArgumentList "install --installation-dir=C:\Docker\"
     ```
8. Restart your computer.

9. Make sure you check `Use the WSL 2 based engine` and `Add the *.docker.internal names to the host's /etc/hosts file (Requires password)` in `Docker Settings > General`.

10. Open Ubuntu terminal and run: `docker ps` to check if Docker is running.
It should show you a list of running containers. 
`CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES`

11. Check Go version: `go version`
It should show you the version of Go you installed. Ex: `go version go1.23.2 linux/amd64`

DONE
