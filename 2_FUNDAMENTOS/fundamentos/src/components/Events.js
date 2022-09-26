
const Events = () => {
    const handleMyEvents = (e) => {
        console.log(e);

        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClink={handleMyEvents}>Clique aqui!</button>
            </div>
            <div>
                <button onClink={() => console.log("clicou!")}>
                    Clique aqui também!
                </button>
                <button 
                    onClink={() => {
                        if (true) {
                            console.log("isso não deveria existir =)")
                        }
                    }}
                >
                    Clique aqui, pleas!
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;