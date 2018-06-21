/**
 * Describes a record of the invetory register
 */
export class RegistryRecord {
    /**
     * Creates and initializes an instance of the RegistryRecord class
     */
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly date: string | null,
        public readonly inventoryId: string | null,
        public readonly room: number | null,
        public readonly amount: number | null,
        public readonly price: number | null
    ) {}
}