import { PF,PI } from "./interfaces/interfaces"
import technologiesLink from "./technologiesIcons"

const PF : PF = {    title: "World Travelers",
    image:"https://res.cloudinary.com/santino/image/upload/v1665663062/worldTravelers/logolargonight_vzbwzl.png",
    description:"PF DE HENRY",
    technologies:[
        technologiesLink.Front[0],
        technologiesLink.Front[1],
        technologiesLink.Front[3],
        technologiesLink.Front[4],
        technologiesLink.Front[5],
        technologiesLink.Front[6],
        technologiesLink.Back[0],
        technologiesLink.DataBases[0],
        technologiesLink.DataBases[2],
        "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
        "https://raw.githubusercontent.com/github/explore/master/topics/mongoose/mongoose.png"
    ]
}
const PI : PI = {
    title: "PI HENRY",
    image:"",
    description:"PI de Henry",
    technologies:[
        technologiesLink.Front[0],
        technologiesLink.Front[1],
        technologiesLink.Front[2],
        technologiesLink.Front[4],
        technologiesLink.Front[5],
        technologiesLink.Back[0],
        technologiesLink.Back[1],
        technologiesLink.DataBases[0],
        technologiesLink.DataBases[1]
    ]
    }

const projects : Object[] = [PF,PI]

export default projects