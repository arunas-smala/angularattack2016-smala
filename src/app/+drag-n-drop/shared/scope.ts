// It's not injectable. We will create new instances as needed
// @Injectable()
export function Scope() {
    this.variables = {};
    this.blocks = {};
    this.repeaters = {};
}
