const Challenge = () => {
       const Num1 = 10
       const Num2 = 20
    return (
        <div>
            <p>Primeiro valor: {Num1}</p>
            <p>Segundo valor: {Num2}</p>
            <button onClink={() => console.log(Num1 + Num2)}>
                Resultado
                </button>
        </div>
    );
};

export default Challenge;