"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadataFields = exports.metadataOperations = void 0;
const displayOptions = {
    show: {
        resource: ['metadata'],
    },
};
exports.metadataOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions,
        options: [
            {
                name: 'List Real Locations',
                value: 'listRealLocations',
                action: 'List real locations',
                description: 'Retrieve the available residential proxy locations',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/real_locations',
                    },
                },
            },
        ],
        default: 'listRealLocations',
    },
];
exports.metadataFields = [];
//# sourceMappingURL=index.js.map