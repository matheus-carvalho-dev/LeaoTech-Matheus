import { useState } from "react";

async function login(event) {
  const data = await fetch(`http://localhost:3000/login`);
  const json = data.json();
}
function App() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  async function fazerLogin(e) {
    const credenciais = JSON.stringify({ cpf, senha });
    e.preventDefault();
    console.log(credenciais);

    const resposta = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: credenciais,
    });
    console.log(resposta.json());
  }
  return (
    <>
      <main
        className="d-flex justify-content-around align-content-center"
        style={{
          height: "100vh",
          margin: "-8px",
        }}
      >
        <div
          className="bg-dark d-flex justify-content-between align-content-center flex-column rounded-5 h-75"
          style={{
            margin: "12vh 40px",
            padding: "15px 20px",
          }}
        >
          <div className="d-flex flex-column justify-content-around h-100 m-5 px-5 mx-1">
            <div
              className="bg-light rounded-circle d-flex justify-content-center"
              style={{ padding: "20px" }}
            >
              <img
                style={{ width: "150px", height: "150px" }}
                src="./user.png"
              />
            </div>
            <form onSubmit={fazerLogin} className="d-flex flex-column gap-2">
              <div className=" d-flex flex-column">
                <label className="text-light fw-bold" htmlFor="cpf">
                  Cpf
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={cpf}
                  onChange={(event) => {
                    setCpf(event.currentTarget.value);
                  }}
                />
              </div>
              <div className="d-flex flex-column mb-0">
                <label className="text-light fw-bold" htmlFor="senha">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={senha}
                  onChange={(event) => {
                    setSenha(event.currentTarget.value);
                  }}
                />
              </div>
              <button className="btn btn-info w-100 h-100 mt-4" type="submit">
                Logar
              </button>
            </form>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
