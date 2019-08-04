'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

class Hello extends React.Component {
    render() {
        return e(
            'label',
            {},
            e(
                'b',
                null,
                e(
                    'a',
                    {
                        href: "radhe",
                        class: "classname"
                    },
                    "borrow"
                )
            )
        );
    }
}

ReactDOM.render(e(Hello), window.document.getElementById('hello'));