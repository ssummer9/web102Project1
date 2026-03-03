# web102Project1

## Node.js via Docker

To quickly run Node.js in a container without installing it locally, use the official Alpine image. Open the integrated terminal and execute the following commands:

```powershell
# Pull the Node.js Docker image:
docker pull node:24-alpine

# Create a Node.js container and start a shell session:
docker run -it --rm --entrypoint sh node:24-alpine

# Inside the container, verify the Node.js version:
node -v   # Should print "v24.14.0".

# Verify npm version:
npm -v    # Should print "11.9.0".
```

These steps let you experiment with Node.js without installing anything on Windows.
