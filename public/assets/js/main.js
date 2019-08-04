'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        console.log('like button props=>>', this.props);
        if (this.state.liked) {
            return 'You liked this.' + this.props.mi;
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like' + this.props.mi
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
            [
                e(
                    'b',
                    { key: Math.random() },
                    xyz.map((ele, i) => [
                        e(
                            'a',
                            {
                                key: Math.random(),
                                href: "radhe",
                                className: "classname"
                            },
                            "borrow" + ele
                        ),
                        e(LikeButton, { mi: 'how', key: Math.random() }),
                        e('br', { key: Math.random() })
                    ]
                    )
                ),
                e(
                    'i',
                    { key: Math.random() },
                    'are u sleeping baby?'
                )
            ]
        );
    }
}

ReactDOM.render(e(Hello), window.document.getElementById('hello'));