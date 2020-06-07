import React from 'react';

class StylingText extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h2>Shopping (unordered) list</h2>

                    <p>Paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference.</p>

                    <ul>
                    <li>Humous</li>
                    <li>Pitta</li>
                    <li>Green salad</li>
                    <li>Halloumi</li>
                    </ul>

                    <h2>Recipe (ordered) list</h2>

                    <p>Paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference.</p>

                    <ol>
                    <li>Toast pitta, leave to cool, then slice down the edge.</li>
                    <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
                    <li>Wash and chop the salad</li>
                    <li>Fill Pitta with salad, humous, and fried halloumi.</li>
                    </ol>

                    <h2>Ingredient description list</h2>

                    <p>Paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference, paragraph for reference.</p>

                    <dl>
                    <dt>Humous</dt>
                    <dd>A thick dip/sauce generally made from chick peas blended with tahini, lemon juice, salt, garlic, and other ingredients.</dd>
                    <dt>Pitta</dt>
                    <dd>A soft, slightly leavened flatbread.</dd>
                    <dt>Halloumi</dt>
                    <dd>A semi-hard, unripened, brined cheese with a higher-than-usual melting point, usually made from goat/sheep milk.</dd>
                    <dt>Green salad</dt>
                    <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
                    </dl>
            </React.Fragment>
        )
    }
}

export default StylingText
