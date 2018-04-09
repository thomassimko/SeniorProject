import * as React from 'react';

export class NotFound extends React.Component<{}, {}> {

    private notFoundContainerStyle = {
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: '#ffffce',
        padding: '20px'
    };

    render() {
        return <div style={{...this.notFoundContainerStyle, marginTop: '50px'}}>
            <h2>
                <i className='fa fa-exclamation-triangle'/>&nbsp;Page Not Found
            </h2>
        </div>
    }
}