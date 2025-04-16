
const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
const { ObjectId } = require('mongodb');

app.use(express.json()); // Middleware to parse JSON
const port=5000;
app.listen(port,()=>{
    console.log('Server is running at port :',port)
})
// GET: fetch all documents
app.get('/', async (req, res) => {
    let collection = await dbConnect();
    let result = await collection.find().toArray();
    res.send(result);
});

// POST: insert a document
app.post('/', async (req, res) => {
    let collection = await dbConnect();
    let result = await collection.insertOne(req.body);
    res.send(result);
});

app.post('/:id', async (req, res) => {
    console.log(req.params)
    let collection = await dbConnect();
    const result = await collection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.send(result);
});
app.put('/:id', async (req, res) => {
    let collection = await dbConnect();
    const updateData = req.body;

    try {
        const result = await collection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: updateData }
        );
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: 'Update failed', details: err.message });
    }
});

//npm init -y
//npm i express 
//npx tsc --init npm run dev   npm install --save-dev @types/multer npm i mongodb   // node index.js  
// mongodb.js
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; // Use 127.0.0.1 instead of ::1
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db('student'); // Replace with your DB name
    return db.collection('profile'); // Replace with your collection
}

module.exports = dbConnect;
/*
Navigate to your cloned folder (you're already in it):

powershell
Copy
Edit
cd "C:\Users\Admin\OneDrive\Documents\wad assigment\wad_code"
Check Git status (optional, just to verify):

bash
Copy
Edit
git status
Create at least one file (Git won’t commit if nothing exists). Example:

bash
Copy
Edit
echo "# My WAD Code" > README.md
Stage and commit your changes:

bash
Copy
Edit
git add .
git commit -m "Initial commit"
Create the main branch (since it doesn’t exist yet):

bash
Copy
Edit
git branch -M main
Push to GitHub:

bash
Copy
Edit
git push -u origin main
📌 Why You Got Those Errors:
“not a git repository”: You ran git add . in a folder that's not initialized.

“nothing to commit”: You hadn't added or created any new files.

“refspec error”: The main branch didn’t exist locally yet.

Let me know if you want help uploading files into the repo or creating a .gitignore, index.html, etc.







You said:
>>
PS C:\Users\Admin\OneDrive\Documents\wad assigment\wad_code> git push -u origin main
>>
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/shravan9i/wad_code.git'


ChatGPT said:
Thanks for the update! That error means your local branch main doesn't exist yet, so Git has nothing to push.

Let’s walk through the full fix for your situation, step by step 👇

✅ Fixing the Error: "src refspec main does not match any"
1. Check your current branch
Run this to see what branch you're on:

bash
Copy
Edit
git branch
If nothing shows, it means you're not on any branch yet (common in fresh, empty repos).

2. Create and switch to main branch
bash
Copy
Edit
git checkout -b main
This creates the main branch and switches to it.

3. Add at least one file
You must have at least one file to commit and push. You can create a quick file like this:

bash
Copy
Edit
echo "# WAD Code" > README.md
Or manually add a file like index.html, etc.

4. Stage and commit the file
bash
Copy
Edit
git add .
git commit -m "Initial commit"
5. Push to GitHub
bash
Copy
Edit
git push -u origin main
Now it should work and push your code to the GitHub repo.

Let me know if you want to create a basic project structure (like HTML, CSS, JS files) for your WAD assignment too!







You said:

error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/shravan9i/wad_code.git'


ChatGPT said:
Alright, that error is still saying:

Git can't find the main branch because it doesn't exist yet locally.

Let’s fix this 100% step-by-step — follow these commands exactly 👇

🔧 Full Fix: Create a branch and push
✅ 1. Go to your repo folder
You're probably already there, but just in case:

powershell
Copy
Edit
cd "C:\Users\Admin\OneDrive\Documents\wad assigment\wad_code"
✅ 2. Check if you're in a Git repo
bash
Copy
Edit
git status
If this gives an error, it means you're not in a Git repo. In that case, run:

bash
Copy
Edit
git init
✅ 3. Create at least one file
Git needs a file to commit:

bash
Copy
Edit
echo "# WAD Code" > README.md
✅ 4. Add the file
bash
Copy
Edit
git add .
✅ 5. Commit your changes
bash
Copy
Edit
git commit -m "Initial commit"
✅ 6. Create the main branch
bash
Copy
Edit
git branch -M main
✅ 7. Link to your GitHub repo
(Do this only if you haven't already)

bash
Copy
Edit
git remote add origin https://github.com/shravan9i/wad_code.git
✅ 8. Now push to GitHub
bash
Copy
Edit
git push -u origin main*/
/*
🔍 Step 1: Check Your Docker Images
To see the Docker images you’ve built:

bash
Copy
Edit
docker images
This will show you a list like:

nginx
Copy
Edit
REPOSITORY          TAG       IMAGE ID       CREATED         SIZE
myapp               latest    abc123def456   2 minutes ago   123MB
▶️ Step 2: Run the Docker Image
Use this command to run a container from your image:

bash
Copy
Edit
docker run -it --name mycontainer myapp
-it: for interactive terminal (useful for shells)

--name mycontainer: give your container a name

myapp: the image name (from docker images)

If your app is a web app (e.g., a Node.js or Python web server), you probably need to map ports:

bash
Copy
Edit
docker run -it -p 8080:80 --name mycontainer myapp
This maps port 80 inside Docker to port 8080 on your PC.

📂 Step 3: Access the App
If your image runs a web app, go to:

arduino
Copy
Edit
http://localhost:8080
(assuming you mapped the port like above)

📜 Step 4: List Running Containers
bash
Copy
Edit
docker ps
To see all containers (even stopped ones):

bash
Copy
Edit
docker ps -a
🛑 Bonus: Stop & Remove a Container
To stop:

bash
Copy
Edit
docker stop mycontainer
To remove:

bash
Copy
Edit
docker rm mycontainer
If you're working on a specific type of app (Node.js, Python Flask, etc.), let me know — I can give you a custom Dockerfile + run command!







You said:
java and phython how the acess


ChatGPT said:
Great! So you're asking how to access or run Docker images that contain Java or Python apps. Let’s break it down by both languages.

☕️ Java App in Docker
🔧 Example Dockerfile for Java
Dockerfile
Copy
Edit
# Use OpenJDK base image
FROM openjdk:17

# Copy your JAR file into the container
COPY MyApp.jar /app/MyApp.jar

# Set working directory
WORKDIR /app

# Run the Java app
CMD ["java", "-jar", "MyApp.jar"]
🛠 Build the image
bash
Copy
Edit
docker build -t my-java-app .
▶️ Run the image
bash
Copy
Edit
docker run --name java-container my-java-app
🐍 Python App in Docker
🔧 Example Dockerfile for Python
Dockerfile
Copy
Edit
# Use Python base image
FROM python:3.11

# Set working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install dependencies (optional)
RUN pip install -r requirements.txt

# Run the Python script
CMD ["python", "main.py"]
🛠 Build the image
bash
Copy
Edit
docker build -t my-python-app .
▶️ Run the image
bash
Copy
Edit
docker run --name python-container my-python-app
🧑‍💻 Accessing a Shell Inside the Container
If you want to open a terminal inside the container:

bash
Copy
Edit
docker exec -it java-container /bin/bash
# or for Python
docker exec -it python-container /bin/bash
📍 Quick Tips

Task	Command
List images	docker images
List containers	docker ps -a
Stop a container	docker stop <container_name>
Remove a container	docker rm <container_name>
Access shell inside	docker exec -it <container_name> /bin/bash
*/