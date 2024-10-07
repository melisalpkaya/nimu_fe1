import React from 'react';
import '../css/form.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Form = ({ inputs, onSubmit, buttonLabel }) => {
    return (
        <form onSubmit={onSubmit}>
        {inputs.map((input, index) => (
            <div key={index} className="form-group">
                <div className="input-container">
                        <i className={`icon ${input.icon}`}></i> {}
                        <input
                            type={input.type}
                            placeholder={input.placeholder}
                            value={input.value}
                            onChange={input.onChange}
                            required
                        />
                    </div>
            </div>
        ))}
        <button type="submit">{buttonLabel}</button>
    </form>
    );
  };
  
  export default Form;