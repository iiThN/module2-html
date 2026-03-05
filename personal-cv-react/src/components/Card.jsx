function Card({ title, children }) {
    return (
        <div className= "container">
            <section className="card">
            <h2>{title}</h2>
            {children}
            </section>
        </div>
    );
}
export default Card;
    