import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, email, body} = this.props.post;

        return (
            <div>
                {name} - {body}
                {email}
            </div>
        );
    }
}

export {Comment};
