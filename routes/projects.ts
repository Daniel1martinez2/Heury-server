import {ProjectType} from '../types/ProjectType'; 
import express from 'express';

const router = express.Router();

const dummyProjects: ProjectType[] = [{
  id: "K1vVeyJxSqpbDStrlEaGs",
  name: "Untitled",
  observations: [],
  users: [{
    id: "asdsad",
    name: "Daniel",
​​​​    profileImg: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI…hdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40",
​​​    role: "owner"
  }],
}];

//GET 
router.get('/projects', (req, res) => {
  res.json(dummyProjects);
})

//POST
router.post('/projects', (request, response) => {
  const {body} = request; 

  dummyProjects.push(body); 

  response.json({
    status: 'ok',
    newProject: body
  });
});

//DELETE
router.delete('/projects', (request, response) => {
  console.log(request.body);
  const {projectId} = request.body; 
  const projectIndex = dummyProjects.findIndex( project => project.id === projectId); 
  dummyProjects.splice(projectIndex, 1); 
  response.json({
    status: 'ok',
    deletedProject: projectIndex
  });
});

export default router; 