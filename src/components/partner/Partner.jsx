function Partner(props) {
    return (
        <div style={{backgroundColor: props.col, margin: "15px", padding: "16px", width: "250px", height: 'auto',  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 12px'}}>
            <a href={props.link}><h3 style={{marginTop: "20px"}}>{props.name}</h3></a>
            <img style={{width: "125px", margin: "10px"}} src={props.source}></img>
        </div>
    );
}

export default Partner;
