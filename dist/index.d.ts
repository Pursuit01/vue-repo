export declare const foo: (name: string) => string;
export declare const TestCom: import('vue').DefineComponent<{
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    update: (val: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
}>> & {
    onUpdate?: ((val: string) => any) | undefined;
}, {}, {}>;
export declare const HelloCom: import('vue').DefineComponent<{
    age: {
        type: import('vue').PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    age: {
        type: import('vue').PropType<number>;
        required: true;
    };
}>>, {}, {}>;
