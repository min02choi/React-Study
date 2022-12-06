function Artist(props) {
    return <h3>** I ♥♡ {props.name}! **</h3>;
}

function Best(props) {
    return (
        <>
            <h2>Who is the best singer?</h2>
            <Artist name={props.who} />
        </>
    );
}
export default Best;