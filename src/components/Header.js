import Welcome from "./Welcome";

function Header(){
    return (
        <>
        <h2>Header Section</h2>
        <Welcome name="muthu" location="chennai" />
        <Welcome name="mugilan" location="madurai" />
        <Welcome name="selvam" location="nellai" />

        </>
    );
}

export default  Header;