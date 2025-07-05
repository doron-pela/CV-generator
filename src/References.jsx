export default function References(props){
    return (
        <section className="reference-output">
                {props.referenceArray? props.referenceArray.map((reference) => {
                        return (
                            <div className='section' key={reference.id}>
                                {(reference.title || reference.entry) && reference===props.referenceArray[0]? (<><h3 className="heading">SKILLS</h3><hr /></>) : null}
                                <ul>
                                    {(reference.title || reference.entry)? (<li> <p className="bold">{reference.title? reference.title+": " : null}{reference.entry? reference.entry: null}</p></li>): null}
                                    {Object.keys(reference).filter((key)=>(!props.standardActivityKeys.includes(key)))
                                        .map((newlyAdded)=><li>{reference[newlyAdded]}</li>)}
                                </ul>
                            </div>
                        );
                    }
                )
                : 
                (<><h3 className="heading">REFERENCES</h3><hr />
                    <p className="heading-line-2">Available upon request</p>
                </>)}
        </section>
    );
}