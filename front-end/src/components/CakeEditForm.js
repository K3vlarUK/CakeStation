import React from 'react';

const CakeEditForm = (props) => {

    if(!props.cake){
        return "Loading..."
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const cake = {
            "name": event.target.cakeName.value,
            "comment": event.target.comment.value,
            "url": event.target.url.value,
            "yumfactor": event.target.yumFactor.value
        }
        props.handleCakeUpdate(cake);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cakeName" defaultValue={props.cake.name} />
                <input type="text" name="comment" defaultValue={props.cake.comment} />
                <input type="url" name="url" defaultValue={props.cake.url} />
                <label htmlFor="yumFactor">The Yum Factor(between 0 and 10)</label>
                <input type="range" min="0" max="10" id="yumFactor" name="yumFactor"defaultValue={props.cake.yumfactor} />
                <button type="submit">Save</button>
            </form>
        </div>
     );
}
 
export default CakeEditForm;