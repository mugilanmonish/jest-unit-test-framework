import { AdminAppsController } from '../classes/AdminAppsController';
import { AppsController } from '../classes/AppsController';

// Mock the entire module
jest.mock('../classes/AppsController');

// Access the mocked class
const MockedAppsController = AppsController as jest.MockedClass<typeof AppsController>;

describe('AdminAppsController', () => {
    let adminAppsController: AdminAppsController;

    beforeEach(() => {
        // Reset the mock before each test
        MockedAppsController.mockClear();

        // Set the mocked implementation for fun1
        MockedAppsController.prototype.fun1.mockReturnValue('Mocked Hello');

        adminAppsController = new AdminAppsController();
    });

    it('should return mocked value from fun1', () => {
        const result = adminAppsController.fun1();
        expect(result).toBe('Mocked Hello');
    });
});
