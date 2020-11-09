
import React from 'react';
import {FaGithub,FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaReact,FaSass,FaHtml5} from 'react-icons/fa'
import {GrGatsbyjs, GrGraphQl} from 'react-icons/gr'
import {SiRedux, SiTypescript, SiWebpack} from 'react-icons/si'
import { nanoid } from 'nanoid';

export const technologies = [
    {
        id:nanoid(),
        title:'React',
        icon:<FaReact/>,
        hover:"#52CFF6"
    },
    {
        id:nanoid(),
        title:'SASS',
        icon:<FaSass/>,
        hover:"red"
    },
    {
        id:nanoid(),
        title:'HTML5',
        icon:<FaHtml5/>,
        hover:'orange'
    },
    {
        id:nanoid(),
        title:'Gatsby',
        icon:<GrGatsbyjs/>,
    },
    {
        id:nanoid(),
        title:'GraphQL',
        icon:<GrGraphQl/>
      
    },
    {
        id:nanoid(),
        title:'Webpack',
        icon:<SiWebpack/>,
    },
    
    {
        id:nanoid(),
        title:'Redux',
        icon:<SiRedux/>,

    },
    {
        id:nanoid(),
        title:'Typescript',
        icon:<SiTypescript/>,
    },
]

export const projects = [
    {
        id:nanoid(),
        filename:"project.jpg",
        title:"Some Project",
        technologies:"Lorem ipsum dolor sit amet consectetur adipisicing",
        live:"https://localhost:8000",
        source:'',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem."
    },
    {
        id:nanoid(),
        filename:"project2.jpg",
        title:"Some Project",
        technologies:"Lorem ipsum dolor sit amet consectetur adipisicing",
        live:"",
        source:'http://github.com/vmatiiv/watch-later',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem."
    }, 
    {
        id:nanoid(),
        filename:"project.jpg",
        title:"Some Project",
        technologies:"Lorem ipsum dolor sit amet consectetur adipisicing",
        live:"https://localhost:8000",
        source:'http://github.com/vmatiiv/watch-later',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem."
    },
    {
        id:nanoid(),
        filename:"project2.jpg",
        title:"Some Project",
        technologies:"Lorem ipsum dolor sit amet consectetur adipisicing",
        live:"https://localhost:8000",
        source:'http://github.com/vmatiiv/watch-later',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem."
    },
    
]

export const about = {
    image:'face.jpg',
    text:[
        'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque at repudiandae minima magni laudantium omnis aliquam! Quis dolorem illum placeat impedit laudantium accusantium tenetur itaque. Nesciunt voluptates quod autem.',
    ],
    resume:"http://localhost:8000" //url to your CV
}

export const contacts = {
    email:"mymail@gmail.com",
    phone:"(123)-930-123-90",
    address:"1600 Amphitheatre Parkway",
    socials:[
        {
            icon:<FaGithub/>,
            url:"https://github.com",
            hover:"#000"
        },
        {
            icon:<FaFacebook/>,
            url:"https://github.com",
            hover:"#4867AA"
        },
        {
            icon:<FaLinkedin/>,
            url:"https://github.com",
            hover:"#0077B5"
        },
        {
            icon:<FaInstagram/>,
            url:"https://github.com",
            hover:"#af1d97"
        },
        {
            icon:<FaTwitter/>,
            url:"https://github.com",
            hover:"#50ABF1"
        },
        
        
    ]
}
export const header = {
    name:"unknown",
    develop:"unknown"
}

export const nav = {
    logo:"logo"
}