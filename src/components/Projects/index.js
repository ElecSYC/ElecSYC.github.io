import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('todos');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <Desc>
          He trabajo en diferentes proyectos personales y de la mano de compañeros, haciendo enfasis en auditorias y automatizacion de procesos de ciberseguridad.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'todos' ?
            <ToggleButton active value="todos" onClick={() => setToggle('todos')}>Todos</ToggleButton>
            :
            <ToggleButton value="todos" onClick={() => setToggle('todos')}>Todos</ToggleButton>
          }
          <Divider />
          {toggle === 'ciberseguridad' ?
            <ToggleButton active value="ciberseguridad" onClick={() => setToggle('ciberseguridad')}>Ciberseguridad</ToggleButton>
            :
            <ToggleButton value="ciberseguridad" onClick={() => setToggle('ciberseguridad')}>Ciberseguridad</ToggleButton>
          }
          <Divider />
          {toggle === 'informatica forence' ?
            <ToggleButton active value="informatica forence" onClick={() => setToggle('informatica forence')}>Informatica Forence</ToggleButton>
            :
            <ToggleButton value="informatica forence" onClick={() => setToggle('formatica forence')}>Informatica Forence</ToggleButton>
          }
          <Divider />
          {toggle === 'herramientas' ?
            <ToggleButton active value="herramientas" onClick={() => setToggle('herramientas')}>Herramientas</ToggleButton>
            :
            <ToggleButton value="herramientas" onClick={() => setToggle('herramientas')}>Herramientas</ToggleButton>
          }
                    <Divider />
          {toggle === 'desarrollo' ?
            <ToggleButton active value="desarrollo" onClick={() => setToggle('desarrollo')}>Desarrollo</ToggleButton>
            :
            <ToggleButton value="desarrollo" onClick={() => setToggle('desarrollo')}>Desarrollo</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'todos' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects