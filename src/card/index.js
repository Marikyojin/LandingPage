import React, { useRef } from 'react';
import { useButton } from 'react-aria';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Card = (props) => {
    function Button(props) {
        let botaoRef = useRef();
        let { buttonProps } = useButton(props, botaoRef);

        return (
            <button {...buttonProps} ref={botaoRef}>
                {props.children}
            </button>
        );
    }



    return (
        <div className='container'>
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt={props.name} title={props.titleImg} />
            </div>

            <div className="bid-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br />
                <span>
                    {props.description}
                </span>
            </div>
            <div>
                <Button onPress={() => alert('Button pressed!')}>Press me</Button>
            </div>

            <form style={{marginTop:20}}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="outlined"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="outlined"
                    />
                </div>

            </form>
        </div>
    );
};

export default Card;