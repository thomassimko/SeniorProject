import * as React from 'react';
import {Button} from "mdbreact";

export function MDButton ({name, ...rest}) {
    return (
        <Button size="lg" className="btn btn-mdb-color" {...rest}>{name}</Button>
    );
}
