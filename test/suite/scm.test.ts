/* --------------------------------------------------------------------------------------------
 * SonarLint for VisualStudio Code
 * Copyright (C) 2017-2023 SonarSource SA
 * sonarlint@sonarsource.com
 * Licensed under the LGPLv3 License. See LICENSE.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { expect } from 'chai';
import { parseIgnoreCheck } from '../../src/scm/scm';

suite('SCM test suite', () => {

  test('should parse git output', () => {
    const gitOutput = '.git/info/exclude 7 .DS_Store /Users/kirill.knize/PycharmProjects/pythonProject/.DS_Store /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/.gitignore /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/inspectionProfiles/profiles_settings.xml /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/misc.xml /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/modules.xml /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/pythonProject.iml /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/sonarlint/issuestore/a/5/a5cc2925ca8258af241be7e5b0381edf30266302 /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/sonarlint/issuestore/e/7/e7502d31339d538f6a21c6735a89d2a8da61b81d /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/sonarlint/issuestore/index.pb /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/sonarlint/securityhotspotstore/index.pb /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/vcs.xml /Users/kirill.knize/.gitignore_global 13 .idea/ /Users/kirill.knize/PycharmProjects/pythonProject/.idea/workspace.xml /Users/kirill.knize/.gitignore_global 4 .vscode/ /Users/kirill.knize/PycharmProjects/pythonProject/.vscode/settings.json .gitignore 2 Servlet.java /Users/kirill.knize/PycharmProjects/pythonProject/my-folder/Servlet.java .gitignore 1 my.py /Users/kirill.knize/PycharmProjects/pythonProject/my.py ';

    const strings = parseIgnoreCheck(gitOutput);

    expect(strings.size).to.equal(15);
  });

});
