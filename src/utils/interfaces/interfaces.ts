export type skillsTraduction = {
    title: {
        ES: String,
        EN: String
    }
    front: {
        ES: String,
        EN: String
    }
    dataBases: {
        ES: String,
        EN: String
    }
    others: {
        ES: String,
        EN: String
    }
}

export type PF = {
    title : string,
    descriptionES: string,
    descriptionEN:string
    image: string
    technologies: string[]
    deploy?:string
}

export type PI = {
    title : string,
    descriptionES: string,
    descriptionEN:string
    image: string
    technologies: string[]
}