'use strict';

class Ringtennis extends React.Component {
    render() {
        const victories = MAX.content.ringtennis;
        const entries = [];

        for (var i=0; i<victories.length; ++i) {
            entries.push(
                e('p', null,
                    e('span', { className: 'margin-right--inline'}, victories[i].title),
                    e('span', { className: 'block tertiary' }, victories[i].when),
                    e('span', { className: 'secondary' }, victories[i].description),
                    e('span', { className: 'secondary' }, victories[i].discipline),
                    e('span', { className: 'block tertiary' }, victories[i].locations)
                )
            );
        }
      
        return e('div', null,
            e(SectionTitle, { text: 'Projects' }),
            ...entries);
    }
}

ReactDOM.render(e(Ringtennis), document.querySelector('#ringtennis'));
