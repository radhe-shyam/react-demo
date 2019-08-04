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
        var xyz = [1, 2, 4];
        return e(
            'label',
            null,
            e(
                'b',
                null,
                xyz.map((ele, i) => e(
                        'a',
                        {
                            key: i,
                            href: "radhe",
                            class: "classname"
                        },
                        "borrow" + ele
                    )
                )
            )
        );
    }
}

ReactDOM.render(e(Hello), window.document.getElementById('hello'));