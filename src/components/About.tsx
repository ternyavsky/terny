import "./About.css"
export default function About(){
    return(
        <div class="main_container" style="margin-top:192px ">
            
            <h2 class="title_about" id="about">
                About me
            </h2>
            <div class="about_block">
            <p class="text_about">
            With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience
            </p>
            <div class="img_bg"></div>
            <img src="../assets/terny.png" alt="" class="img_about" />
            </div>

            <div class="skills_block">
                <h3 class="skills_title" id="blog">
                    My skills
                </h3>
                <div class="table">
                    <div class="col">
                        <div class="row">
                            <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            User Interface (UI) Design
                            </p>
                        </div>
                        <div class="row">
                            <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            REST, gRPC, GraphQL
                            </p>
                        </div>
                        <div class="row">
                        <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            Python, Golang, JavaScript
                            </p>
                        </div>
                        <div class="row">
                        <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            Docker, Kubernetes
                            </p>
                        </div>
                    </div>
                    <div class="col" >
                        <div class="row">
                            <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                                PostgreSQL, MySQL
                            </p>
                        </div>
                        <div class="row">
                            <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            Solid, React, TypeScript
                            </p>
                        </div>
                        <div class="row">
                        <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            Django, Flask, FastAPI
                            </p>
                        </div>
                        <div class="row">
                        <img class="row_img" src="../assets/Ellipse 1.svg"></img>
                            <p class="row_text">
                            System Design
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}