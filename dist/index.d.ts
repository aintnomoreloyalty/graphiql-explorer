declare module 'graphiql-explorer' {
    import { GraphQLObjectType, GraphQLSchema } from 'graphql';
    import { ReactNode } from 'react';

    export interface GraphiqlExplorerProps {
        query: string;
        width?: number;
        title?: string;
        schema?: GraphQLSchema;
        onEdit: (value: string) => void;
        getDefaultFieldNames?: (type: GraphQLObjectType) => Array<string>;
        getDefaultScalarArgValue?: any;
        makeDefaultArg?: any;
        onToggleExplorer: () => void;
        explorerIsOpen: boolean;
        onRunOperation?: (name: string) => void;
        colors?: any;
        arrowOpen?: ReactNode;
        arrowClosed?: ReactNode;
        checkboxChecked?: ReactNode;
        checkboxUnchecked?: ReactNode;
        styles?: {
            explorerActionsStyle?: any;
            buttonStyle?: any;
            actionButtonStyle?: any;
        };
        showAttribution: boolean;
    }

    export default class GraphiqlExplorer extends React.Component<
        GraphiqlExplorerProps,
        object
    > {}
}

