
const TemplatesExpressions = () => {

    const name = "Dutra";
    const data = {
        age: 33,
        job: "Programmer",
    };

    return (
        <div>
            <h2>Bem vindo {name}, tudo bem!</h2>
            <p>Você atua como: {data.job}</p>
        </div>
    );
};

export default TemplatesExpressions;