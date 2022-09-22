
const Events = () => {
    const handleMyEvents = (e) => {
        console.log(e);
    };

    return (
        <div>
            <div>
                <button onClink={handleMyEvents}>Clique aqui!</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Events;