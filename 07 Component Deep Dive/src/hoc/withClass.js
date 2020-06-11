import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>

            {/* Forward props to components */}
            {/* Forward props to components */}
            <WrappedComponent {...props} />
        </div>
    );
};

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

export default withClass;
