import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Conocimientos</h2>

      <div className="skills-columns">
        <div className="skills-group">
          <h3>Tecnologías</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="java.png" alt="Java" />
              <p>Java</p>
            </div>
            <div className="skill-item">
              <img src="kotlin.png" alt="Kotlin" />
              <p>Kotlin</p>
            </div>
            <div className="skill-item">
              <img src="csharp.png" alt="C#" />
              <p>C#</p>
            </div>
            <div className="skill-item">
              <img
                src="dotnet.png"
                alt=".NET"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>.NET</p>
            </div>
            <div className="skill-item">
              <img
                src="javascript.png"
                alt="JavaScript"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <img src="react.png" alt="React" />
              <p>React / React Native</p>
            </div>
            <div className="skill-item">
              <img src="angular.png" alt="Angular" />
              <p>Angular</p>
            </div>
            <div className="skill-item">
              <img src="vue.png" alt="Vue.js" />
              <p>Vue.js</p>
            </div>
            <div className="skill-item">
              <img
                src="jquery.png"
                alt="JQuery"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>JQuery</p>
            </div>
            <div className="skill-item">
              <img
                src="python.png"
                alt="Python"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src="sqlserver.png" alt="SQL Server" />
              <p>SQL Server</p>
            </div>
            <div className="skill-item">
              <img
                src="postgresql.png"
                alt="PostgreSQL"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <h3>IDEs y Aplicaciones</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="vscode.png" alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div className="skill-item">
              <img src="visualstudio.png" alt="Visual Studio" />
              <p>Visual Studio</p>
            </div>
            <div className="skill-item">
              <img
                src="androidstudio.png"
                alt="Android Studio"
                style={{
                  borderRadius: 5,
                  marginTop: 5,
                  marginBottom: 12,
                  width: 90,
                  height: 90,
                }}
              />
              <p>Android Studio</p>
            </div>
            <div className="skill-item">
              <img
                src="intellij.png"
                alt="IntelliJ Idea"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>IntelliJ Idea</p>
            </div>
            <div className="skill-item">
              <img
                src="unity.png"
                alt="Unity"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>Unity</p>
            </div>
            <div className="skill-item">
              <img
                src="git.png"
                alt="Git"
                style={{
                  borderRadius: 10,
                  marginTop: 8,
                  marginBottom: 15,
                  width: 85,
                  height: 85,
                }}
              />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img
                src="github.png"
                alt="Github"
                style={{
                  borderRadius: 10,
                  marginTop: 8,
                  marginBottom: 15,
                  width: 85,
                  height: 85,
                }}
              />
              <p>Github</p>
            </div>
            <div className="skill-item">
              <img src="docker.png" alt="Docker" />
              <p>Docker</p>
            </div>
            <div className="skill-item">
              <img src="dbeaver.png" alt="DBeaver" />
              <p>DBeaver</p>
            </div>
            <div className="skill-item">
              <img src="postman.png" alt="Postman" />
              <p>Postman</p>
            </div>
            <div className="skill-item">
              <img
                src="powerapps.png"
                alt="Microsoft PowerApps"
                style={{
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 18,
                  width: 80,
                  height: 80,
                }}
              />
              <p>Microsoft PowerApps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
