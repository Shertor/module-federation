import { HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { BtnMenuComponent } from "projects/styleguide-lib/src/lib/components/btn-menu/btn-menu.component"

import { PluginsImportService } from "./plugins-import.service"

describe("PluginsImportService", () => {
  let service: PluginsImportService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BtnMenuComponent, RouterTestingModule, HttpClientModule],
      declarations: [],
    })
    service = TestBed.inject(PluginsImportService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
