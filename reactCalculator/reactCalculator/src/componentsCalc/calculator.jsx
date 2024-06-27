import '../App.css'

function Calc() {
    return(
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className='display'>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" value={'AC'} />
                        <input type="text" value={'C'} />
                        <input type="text" value={'.'} />
                        <input type="text" value={'/'} />
                    </div>
                    <div>
                        <input type="text" value={'7'} />
                        <input type="text" value={'8'} />
                        <input type="text" value={'9'} />
                        <input type="text" value={'*'} />
                    </div>
                    <div>
                        <input type="text" value={'4'} />
                        <input type="text" value={'5'} />
                        <input type="text" value={'6'} />
                        <input type="text" value={'+'} />
                    </div>
                    <div>
                        <input type="text" value={'1'} />
                        <input type="text" value={'2'} />
                        <input type="text" value={'3'} />
                        <input type="text" value={'-'} />
                    </div>
                    <div>
                        <input type="text" value={'00'} />
                        <input type="text" value={'0'} />
                        <input type="text" value={'='} />
                        <input type="text" value={'%'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export {Calc}