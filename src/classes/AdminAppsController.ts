import { AppsController } from "./AppsController";

const appsController = new AppsController();

export class AdminAppsController {

    public fun1(): any {
        return appsController.fun1()
    }
}