function isTrue(val) {
  return val && String(val).toLowerCase() === 'true';
}

function verifySuspendDataVersion(maxAttempts) {
  var commitDataAndBook;
  var launchData;
  var manifestCPV;
  var resetFlag;
  var sentBookCheck;
  var sentDataCheck;
  var suspendData = GetDataChunk();
  var suspendDataCPV;

  if (!suspendData) {
    return;
  }

  if (maxAttempts === 0) {
    WriteToDebug('WARNING: ERROR WITH CLEARING SUSPEND OR BOOKMARKING DATA!');
    WriteToDebug('NO MORE ATTEMPTS LEFT. COURSE BEHAVIOR MAY BE NEGATIVELY IMPACTED.');
    return;
  }

  try {
    launchData = JSON.parse(atob(GetLaunchData()));
  } catch (e) {
    WriteToDebug('WARNING: Issue with obtaining manifest launch data. Version reset behavior disabled.');
    return;
  }

  try {
    suspendData = JSON.parse(suspendData);
  } catch (e) {
    WriteToDebug('WARNING: Unable to parse suspend data. Version reset behavior disabled.');
    return;
  }

  manifestCPV = launchData.cpv;
  resetFlag = launchData.rld;
  suspendDataCPV = suspendData.cpv;

  if (suspendDataCPV !== manifestCPV) {
    WriteToDebug('WARNING: Suspend data version mismatch against manifest version.');
    if (resetFlag) {

      if (reviewModeIsReadOnly() && GetLessonMode() === 3) {
        WriteToDebug('WARNING: Course is in review mode. Unable to clear suspend and bookmarking data!');
        WriteToDebug('Resetting of learner data will not occur. Course behavior may be negatively impacted.');
        return;
      }

      WriteToDebug('Okay to clear data. Now clearing suspend and bookmarking data...');

      sentDataCheck = SetDataChunk("");
      WriteToDebug('Suspend Data Cleared: ' + sentDataCheck );

      sentBookCheck = SetBookmark("");
      WriteToDebug('Bookmark Data Cleared: ' + sentBookCheck );

      commitDataAndBook = CommitData();
      WriteToDebug('Data Commited: ' + commitDataAndBook );

      if (isTrue(sentDataCheck) && isTrue(sentBookCheck) && isTrue(commitDataAndBook)) {
        WriteToDebug('Verified that all bookmarking and suspend data have been cleared. Data commited successfully.');
      } else {
        WriteToDebug('WARNING: ERROR WITH CLEARING SUSPEND OR BOOKMARKING DATA! RETRY ATTEMPTS LEFT: ' + (maxAttempts-1));
        verifySuspendDataVersion(maxAttempts-1);
      }
    } else {
      WriteToDebug('WARNING: Course reset flag not turned on. Resetting of learner data will not occur.');
      WriteToDebug('Course behavior may be negatively impacted.');
    }
  }
}
